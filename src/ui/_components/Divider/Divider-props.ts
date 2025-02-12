export interface DividerLabelProps {
  label: string;
  position: POSITION.START |
            POSITION.CENTER |
            POSITION.END;
  style : DIVIDERSTYLE.DASHED | 
          DIVIDERSTYLE.DOUBLE |
          DIVIDERSTYLE.DOTTED |
          DIVIDERSTYLE.SOLID;
  labelFont : LABELFONT.SMALL |
              LABELFONT.MEDIUM |
              LABELFONT.LARGE

  // TODO : FOR MORE IMPLEMENTAION
}

export enum POSITION {
  START = "start",
  CENTER = "center",
  END = "end",
}

export enum DIVIDERSTYLE {
    DASHED = "border-t border-dashed",
    DOUBLE = "border-t-4 border-double",
    DOTTED = "border-t border-dotted",
    SOLID = "border-t border-solid"
}

export enum LABELFONT {
  SMALL = "text-base",
  MEDIUM = "text-2xl",
  LARGE = "text-3xl"
}
