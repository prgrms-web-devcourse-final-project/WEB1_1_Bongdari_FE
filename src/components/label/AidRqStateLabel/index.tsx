import { Wrapper } from './indexCss';

interface AidRqStateLabelLabelProps {
  state: string;
}

//state props로는 '모집중' / '모집완료' / '종료' 셋중 하나를 string 값으로 넣어주면 됩니다. (띄어쓰기X)
const AidRqStateLabel: React.FC<AidRqStateLabelLabelProps> = ({ state }) => {
  return <Wrapper state={state}>{state}</Wrapper>;
};

export default AidRqStateLabel;
