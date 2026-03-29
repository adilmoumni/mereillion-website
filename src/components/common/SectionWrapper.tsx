import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  as?: 'section' | 'div' | 'header' | 'footer';
  withSectionSpacing?: boolean;
  withContainerPadding?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  containerClassName = '',
  as: Component = 'section',
  withSectionSpacing = true,
  withContainerPadding = true,
}) => {
  const sectionSpacingClass = withSectionSpacing ? 'section-stack' : '';
  const containerPaddingClass = withContainerPadding ? 'px-container-gap' : '';

  return (
    <Component id={id} className={`w-full ${sectionSpacingClass} ${className}`}>
      <div className={`max-w-7xl mx-auto ${containerPaddingClass} ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
};

export default SectionWrapper;
