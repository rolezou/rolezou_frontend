import { Text, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity<{ eventType: string }>`
  width: 100%;
  height: 140px;
  padding: 5px;
  border-radius: 4px;

  ${(props) =>
    props.eventType === "side" &&
    css`
      flex-direction: row;
    `}
`;

// export const ImageContainer = styled.Image<{ eventType: string }>`
//   width: 100%;
//   height: 50%;
//   border-top-left-radius: 8px;
//   border-top-right-radius: 8px;

//   ${(props) =>
//     props.eventType === "side" &&
//     css`
//       width: 50%;
//       height: 100%;
//       border-top-left-radius: 8px;
//       border-top-right-radius: 0;
//       border-bottom-left-radius: 8px;
//     `}
// `;

export const CardBody = styled(View)`
  padding: 8px;
  flex: 1;
`;

export const CardBodyTitle = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`;

export const CardBodyText = styled(Text)`
  font-size: 16px;
  color: white;
`;
