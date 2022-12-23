import React, { Children, useState } from 'react'
import styled from 'styled-components'

const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const SubMenuTitle = styled.div`
  font-size: 22px;
  text-align: right;
  cursor: pointer;
  transition: 0.5s;
`

const SubMenuChildrenWrapper = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  overflow: hidden;
  border: 0;
  max-height: 0;
  transition: max-height 0.5s ease-out, border 0.5s ease;

  ${(props) =>
    props.isExpanded &&
    `
    max-height: 200px;
  `}

  &>*:first-child {
    margin-top: 8px;
    border-top: 1px solid #383838;
    padding-top: 8px;
  }
`

const Divider = styled.div`
  width: 80px;
`

type SubMenuProps = {
  title: string
  currentSection: string
  children: React.ReactNode
}

const SubMenu: React.FC<SubMenuProps> = ({
  title,
  currentSection,
  children,
}) => {
  const isExpanded = currentSection === 'dockerman' || currentSection === 'hawking'
  return (
    <SubMenuWrapper>
      <SubMenuTitle className="submenu-title">{title}</SubMenuTitle>
      <SubMenuChildrenWrapper
        className="submenu-children"
        isExpanded={isExpanded}
      >
        <Divider />
        {children}
      </SubMenuChildrenWrapper>
    </SubMenuWrapper>
  )
}

export default SubMenu
