import styled from 'styled-components';
import SelfHelpSVG from '../../assets/self-help.svg'
import PodcastSVG from '../../assets/podcast.svg'
import MoneySVG from '../../assets/money.svg'

const iconStyle = {
    width: "36px",
    height: "36px"
}

export const BarContainer = styled.div`
    display: flex; 
    width: ${props => props.width} /*65px*/;
    flex-direction: ${props => props.flexDirection};
`
export const SelfHelpIcon = styled(SelfHelpSVG)`
    width: ${iconStyle.width};
    height: ${iconStyle.height};
`

export const MoneyIcon = styled(MoneySVG)`
    width: ${iconStyle.width};
    height: ${iconStyle.height};
`

export const PodcastIcon = styled(PodcastSVG)`
    width: ${iconStyle.width};
    height: ${iconStyle.height};
`
