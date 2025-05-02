import styled from "styled-components";

const StyledHeaderHeart = styled.div`
cursor: pointer;
svg {
    transition: all 0.3s ease;
}
&:hover svg rect {
    fill: #FFF8EB;
    stroke: #FFA900;
}
&:hover svg path {
    fill: #FFA900;
}

`;
function HeaderHeart() {
  return (
    <StyledHeaderHeart>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="48"
        viewBox="0 0 50 48"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="49"
          height="47"
          rx="15.5"
          fill="white"
          stroke="#E1E1E1"
        />
        <path
          d="M34.1756 17.2096C32.9981 16.0173 31.4296 15.3576 29.7635 15.3576C28.0973 15.3576 26.5242 16.0173 25.3467 17.2143C25.1598 17.4036 24.8542 17.4036 24.6672 17.2143L24.6579 17.2048C23.4758 16.0079 21.9073 15.3481 20.2365 15.3481C18.5703 15.3481 17.0066 16.0032 15.8291 17.2001C14.6469 18.3971 14 19.9852 14 21.6722C14 23.3593 14.6516 24.9474 15.8337 26.1396L24.3368 34.7493C24.5136 34.9283 24.7556 35.032 25.0116 35.032C25.2629 35.032 25.505 34.9283 25.6865 34.7493L34.1663 26.1538C35.3484 24.9568 35.9953 23.3687 36 21.6817C36.0046 19.9946 35.3531 18.4065 34.1756 17.2096Z"
          fill="#E1E1E1"
        />
      </svg>
    </StyledHeaderHeart>
  );
}

export default HeaderHeart;
