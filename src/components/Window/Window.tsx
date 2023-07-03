import * as S from './Window.styles';

export function Window({ isOpen, setIsOpen, children, ...props}: any) {
  return (
      <S.Window isOpen={isOpen} setIOpen={setIsOpen} {...props}>
        {children}
      </S.Window>
    )
  }