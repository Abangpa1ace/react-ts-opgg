import { getStorage } from '@/utils/storage'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  
}

const SearchRecent: React.FC<Props> = ({  }) => {
  const recents = getStorage<string[]>('recent', false) || [];
  const likes = getStorage<string[]>('like') || [];
  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <ScSearchRecent>
      {!!recents.length && recents.map(r => <span>{r}</span>)}
    </ScSearchRecent>
  )
}

const ScSearchRecent = styled.div`
  
`

export default SearchRecent