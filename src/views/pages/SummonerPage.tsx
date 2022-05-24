import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SummonerHeader from "@/views/components/summoner/SummonerHeader";
import SummonerInfoLeft, { ScSummonerInfoLeft } from "@/views/components/summoner/SummonerInfoLeft"
import { getSummonerInfo, getSummonerMosts } from '@/services'
import useReactRouter from "@/hooks/useReactRouter";
import s from '@/styles';

type SummonerInfo = {
  summoner: SummonerDto;
  summonerMosts: SummonerMostsDto;
}

const SummonerPage = () => {
  const { query: { name } } = useReactRouter();
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo>({
    summoner: null,
    summonerMosts: null,
  })

  useEffect(() => {
    fetchSummoner();
  }, [name])

  const fetchSummoner = async () => {
    const summonerName = name as string
    let [summoner, summonerMosts] = await Promise.all([
      getSummonerInfo(summonerName), 
      getSummonerMosts(summonerName),
    ])
    setSummonerInfo({ summoner, summonerMosts })
  }

  return (
    <ScSummonerPage>
      <SummonerHeader summoner={summonerInfo?.summoner} />
      <main className="summoner-info">
        <section className="container">
          <SummonerInfoLeft summoner={summonerInfo?.summoner} summonerMosts={summonerInfo?.summonerMosts} />
          {/* <SummonerInfoRight /> */}
        </section>
      </main>
    </ScSummonerPage>
  );
};

const ScSummonerPage = styled.div`
  .summoner-info { ${s('mt(10);')};
    .container { ${s('flex; gap(10);')}
      ${ScSummonerInfoLeft} { width: 300px; }
    }
  }
`;

export default SummonerPage;
