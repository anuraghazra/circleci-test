import styled from 'styled-components';

export const ProjectWrapper = styled.section`
  color: #383838;
  width: 100%;
  line-height: 170%;
  margin: 100px 0;
`

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 170px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`;

export const ProjectDetail = styled.div`
  padding: 70px 50px;
  background-color: white;
  box-shadow: 0 30px 100px 0px rgba(0,0,0,.2);
  border-radius: 10px;

  grid-column: 1 / 3;
  grid-row: 1 / 1;
  
  .project__detail-container {
    width: 75%;
  }
`;

export const ProjectLinks = styled.div`
`

export const ProjectPreview = styled.div`
  grid-column: 2 / span 4;
  grid-row: 1 / 1;
  position: relative;
  right: -20px;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`


export const Tags = styled.div`
  margin: 10px;
  color: #6A98F0;
  display: flex;
  font-size: 24px;

  i {
    margin-right: 25px;
  }
`
