import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SummonerHeader from "@/views/components/summoner/containers/SummonerHeader";
import { getSummonerInfo } from '@/services'
import s from '@/styles'

const SummonerPage = () => {
  const [summonerInfo, setSummonerInfo] = useState<SummonerDto>(null);

  useEffect(() => {
    (async () => {
      const { summoner } = await getSummonerInfo('탈모전사프리큐어');
      setSummonerInfo(summoner)
    })()
  }, [])

  console.log('test', summonerInfo)

  return (
    <ScSummonerPage>
      <section>
        <SummonerHeader summonerInfo={summonerInfo} />
        <div className="info-container">
          {/* <SummonerInfoLeft />
          <SummonerInfoRight /> */}
        </div>
      </section>
    </ScSummonerPage>
  );
};

const ScSummonerPage = styled.div`
  section {
    min-height: calc(100vh - 97px);
  }
`;

export default SummonerPage;
