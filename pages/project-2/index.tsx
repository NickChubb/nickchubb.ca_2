import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useRef } from 'react'
import { projectData } from '../../src/data/projects'
import styled from 'styled-components'
import useClickOutside from '../../src/hooks/use-click-outside'

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 32px;
  padding: 64px;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
`

const ProjectCard = styled(motion.div)`
  // max-width: 420px;
  background: gray;
  border-radius: 8px;
  padding: 32px;
  flex: 2;
  &:nth-child(odd) {
    flex: 1;
  }
`

const PopupWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Popup = styled(motion.div)`
  background: white;
  color: black;
  width: 40%;
  padding: 32px;
`

const ProjectPage: React.FC = () => {
  const [selected, setSelected] = useState<{
    id: string
    summary: string
    title: string
  }>(null)
  const popupRef = useRef(null)
  useClickOutside(popupRef, () => setSelected(null))
  return (
    <div>
      <CardContainer>
        {projectData.map((item) => {
          if (!item.display) return null
          return (
            <ProjectCard
              layoutId={item.id}
              onClick={() =>
                setSelected({
                  id: item.id,
                  summary: item.summary,
                  title: item.icon + ' ' + item.title,
                })
              }
            >
              <motion.h2>{item.icon + ' ' + item.title}</motion.h2>
              <motion.h5>{item.summary}</motion.h5>
            </ProjectCard>
          )
        })}
      </CardContainer>

      <AnimatePresence>
        {selected && selected.id !== '' && (
          <PopupWrapper>
            <Popup layoutId={selected.id} ref={popupRef}>
              <motion.h2>{selected.title}</motion.h2>
              <motion.h5>{selected.summary}</motion.h5>
              <motion.button onClick={() => setSelected(null)}>
                close
              </motion.button>
            </Popup>
          </PopupWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectPage
