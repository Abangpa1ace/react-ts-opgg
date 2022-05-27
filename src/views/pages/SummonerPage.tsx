import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SummonerHeader from "@/views/components/summoner/SummonerHeader";
import SummonerInfoLeft, { ScSummonerInfoLeft } from "@/views/components/summoner/SummonerInfoLeft"
import SummonerInfoRight, { ScSummonerInfoRight } from "@/views/components/summoner/SummonerInfoRight"
import { getSummonerInfo } from '@/services'
import useReactRouter from "@/hooks/useReactRouter";
import s from '@/styles';

const SummonerPage = () => {
  const { query: { name } } = useReactRouter();
  const [summonerInfo, setSummonerInfo] = useState<SummonerDto>(null)

  useEffect(() => {
    fetchSummoner();
  }, [name])

  const fetchSummoner = async () => {
    const summoner = await getSummonerInfo(name as string);
    setSummonerInfo(summoner)
  }

  return (
    <ScSummonerPage>
      <SummonerHeader summoner={summonerInfo} />
      <main className="summoner-info">
        <section className="container">
          <SummonerInfoLeft summoner={summonerInfo} />
          <SummonerInfoRight />
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
