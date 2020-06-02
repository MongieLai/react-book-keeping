import React from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'

const TagsSection = styled.section`
  padding: 12px 16px;
  background-color: #fff;
  ul {
    /* display: flex;
    flex-wrap: wrap; */
    margin: 0 -12px;
    li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  button{
      border:none;
      background-color:inherit;
      font-family:none;
      padding:3px;
      border-bottom:1px #333 solid;
      color:#666;
      margin-top:9px;
  }
`

const NotesSection = styled.section``

const CategorySection = styled.section`
  ul {
    display: flex;
    li {
      width: 50%;
      border: 1px red solid;
    }
  }
`

const NumberPadSection = styled.section``

const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>行</li>
          <li>行</li>
          <li>行</li>
          <li>行</li>
          <li>行</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>

      <NotesSection>
        <label>
          <span>备注</span>
          <input type='text' />
        </label>
      </NotesSection>

      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>

      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Del</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>C</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}

export default Money
