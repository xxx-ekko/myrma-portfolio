import { SvgIcon, type SvgIconProps } from '@mui/material';

const LogoMyrma = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 100 100" {...props}>
      <g fill="currentColor">
        {/* Pilier gauche : rapproché du centre (décalé vers la droite) */}
        <polygon points="14,15 24,30 24,85 14,85" />
        
        {/* Pilier droit : rapproché du centre (décalé vers la gauche) */}
        <polygon points="86,15 76,30 76,85 86,85" />
        
        {/* Le 'Y' central reste parfaitement au milieu */}
        <polygon points="
          26,15 
          36,15 
          50,36 
          64,15 
          74,15 
          55,43.5 
          55,85 
          45,85 
          45,43.5
        " />
      </g>
    </SvgIcon>
  );
};

export default LogoMyrma;