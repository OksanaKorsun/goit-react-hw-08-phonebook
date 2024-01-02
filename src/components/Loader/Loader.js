import { ThreeDots } from 'react-loader-spinner';
import { FormatedLoader } from './Loader.styled';
export const Loader = () => (
  <FormatedLoader>
    <ThreeDots
      height="120"
      width="120"
      radius="9"
      color="#1C56C3"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </FormatedLoader>
);
