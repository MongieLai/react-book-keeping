import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useTags } from 'hooks/useTags'
import { createId } from 'lib/createId'
import Icon from 'components/Icon'
import { Link } from 'react-router-dom'
const Wrapper = styled.section`
  flex-grow: 1;
`

const Tags = styled.div`
.currentTags{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 8px;
    span {
      font-size: 12px;
      margin-top: 5px;
    }
    .icon {
      border-radius: 50%;
      height: 40px;
      width: 40px;
      padding: 10px;
    }
    &.highlight {
      .icon {
        background: rgb(255, 218, 71);
      }
    }
  }
}
.add-wrapper{
  width: 25%;
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    span {
      font-size: 12px;
      margin-top: 5px;
    }
    .icon {
      border-radius: 50%;
      height: 40px;
      width: 40px;
      padding: 10px;
    }
    &.highlight {
      .icon {
        background: rgb(255, 218, 71);
      }
    }
}}
`
type Props = {
  selected: number[]
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = props => {
  let [c, setC] = useState({ name: "衣", iconName: "food", tagType: "吃喝" })
  const [userTags, setUserTags] = useState([1, 2])
  useTags()
  const tags = JSON.parse(localStorage.getItem('userTags') || '[]')!
  console.log(tags)
  console.log(userTags)
  const selectedTagIds = props.selected
  const clickAddButton = () => {
  }
  const onToggleTag = (tagId: number) => {
    if (selectedTagIds.indexOf(tagId) >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }
  return (
    <Wrapper>
      <Tags>
        <ul className='currentTags'>
          {tags.map((item: any) => {
            return (
              <li
                onClick={() => { setC({ ...item }); console.log(c) }}
                className={c.name === item.name ? 'highlight' : ''}
                key={item.name}>
                <Icon name={item.iconName} />
                <span>{item.name}</span>
              </li>)
          })}
          <div className='add-wrapper'>
            <Link to='/labels'>
              <Icon
                onClick={() => {
                  clickAddButton()
                }}
                name='add'
              />
              <span>添加</span>
            </Link>
          </div>
        </ul>
      </Tags>
    </Wrapper>
  )
}
export { TagsSection }
