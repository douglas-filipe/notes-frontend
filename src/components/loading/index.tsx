import Lottie from 'react-lottie'
import loading from '../../assets/loading/loading-green.json'
import { Container } from './styles';

export const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Container>

            <Lottie width={100} height={100} options={defaultOptions}>
            </Lottie>

        </Container>
        
    )
}