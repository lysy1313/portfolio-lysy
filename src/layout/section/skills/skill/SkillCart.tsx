import styled from "styled-components";

type SkillCartProps = {
  skillType?: string;
  skillLang?: string;
};

export const SkillCart = (props: SkillCartProps) => {
  return (
    <StyledSkillCart>
      <tr>
        <th>{props.skillType}</th>
      </tr>
      <tr>
        <td>{props.skillLang}</td>
      </tr>
    </StyledSkillCart>
  );
};

const StyledSkillCart = styled.table`
  border-collapse: collapse;
  border: 1px solid #abb2bf;
  box-sizing: border-box;
  min-width: 103px;
  tr,
  th {
    border: 1px solid #abb2bf;
    text-align: start;
  }
`;
