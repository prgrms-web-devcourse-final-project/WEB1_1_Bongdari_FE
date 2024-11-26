import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {
  GoodsContainer,
  GoodsItemBox,
  GoodsTitle,
  RegisterBarContainer,
  RegisterButton,
  RegisterTitleSection,
  ResisterTitle,
  SectionBox,
  TooltipBorder,
  Xmark
} from './indexCss';
import InputBox from '@/components/inputBox';

const RegisterGoods = () => {
  return (
    <SectionBox>
      <RegisterTitleSection>
        <ResisterTitle>필요품 등록</ResisterTitle>
        <Tooltip title={`기관에 필요한 물품을 직접 입력해 등록해보세요(예: 어린이 동화 10권)`} arrow>
          <Button style={{ paddingLeft: 0 }}>
            <TooltipBorder>
              <i className="fa-solid fa-exclamation"></i>
            </TooltipBorder>
          </Button>
        </Tooltip>
      </RegisterTitleSection>
      <GoodsContainer>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
        <GoodsItemBox>
          <GoodsTitle>어린이 동화 10권</GoodsTitle>
          <Xmark className="fa-solid fa-x"></Xmark>
        </GoodsItemBox>
      </GoodsContainer>
      <RegisterBarContainer>
        <InputBox
          getInputText={() => console.log('입력')}
          colortype={1}
          borderradius="8px"
          width="776px"
          height="53px"
          placeholder="최대 15자 이내로 입력해주세요."
        />
        <RegisterButton>등록하기</RegisterButton>
      </RegisterBarContainer>
    </SectionBox>
  );
};

export default RegisterGoods;
