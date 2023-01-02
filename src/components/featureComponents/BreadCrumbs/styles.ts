import styled from 'styled-components'
import {MdOutlineNavigateNext} from 'react-icons/md'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  a{
    color: #8D8D8D;
    transition: color ${(p) => p.theme.transition.default};
    text-transform: capitalize;
  }

  a:hover{
    color: ${(p) => p.theme.colors.primary};
  }

  .bread-active{
    color: ${(p) => p.theme.colors.primary};
    font-weight: 700;
    text-transform: capitalize;
  }
`


export const NextIcon = styled(MdOutlineNavigateNext)`
  font-size: 1.5rem;
  color: #8D8D8D;
`