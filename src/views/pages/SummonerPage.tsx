import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSummonerInfo } from '@/services'
import useReactRouter from "@/hooks/useReactRouter";
import s from '@/styles';
import { AxiosError } from "axios";
import SummonerInvalid from "@/views/components/summoner/SummonerInvalid";
import Loader from "../layouts/Loader";

const SummonerHeader = React.lazy(() => import('@/views/components/summoner/SummonerHeader'));
const SummonerInfoLeft = React.lazy(() => import('@/views/components/summoner/SummonerInfoLeft'));
const SummonerInfoRight = React.lazy(() => import('@/views/components/summoner/SummonerInfoRight'));

const SummonerPage = () => {
  const { navigate, query: { name } } = useReactRouter();
  
  const [summonerInfo, setSummonerInfo] = useState<SummonerDto>(null)
  
  useEffect(() => {
    fetchSummoner();
  }, [name])

  /** 
   * name이 없으면 에러를 발생하여 ErrorPage로 이동시켰지만,
   * 
   * API(/summoner) 를 빈 path로 요청하면 이름만 'undefined' 인 랜덤 데이터(200)가 온다.
   * 이를 포함한 경우를 빈값 예외처리로 고려, 헤더 UI분기 & 컨텐츠 영역 SummonerInvalid 컴포넌트로 대체했다.
   */
  const isInvalid = (summonerInfo?.name === 'undefined' || !name || !summonerInfo)

  const fetchSummoner = async () => {
    try {
      const summoner = await getSummonerInfo(name as string);
      setSummonerInfo(summoner)
    }
    catch(e) {
      const error = e as AxiosError;
      if (error.message === 'Network Error') navigate('/error')
    }
  }

  return (
    <ScSummonerPage>
      <SummonerHeader summoner={summonerInfo} isInvalid={isInvalid} />
      <main className="summoner-info">
        <section className="container">
          {isInvalid ? <SummonerInvalid /> : 
            <>
              <SummonerInfoLeft summoner={summonerInfo} />
              <SummonerInfoRight />
            </>
          }
        </section>
      </main>
    </ScSummonerPage>
  );
};

const ScSummonerPage = styled.div`
  .summoner-info { ${s('mt(10);')};
    .container { ${s('flex; gap(10);')}
      > div:first-child { width: 300px; }
      > div:nth-child(2) { width: 690px; }
    }
  }
`;

export default SummonerPage;
