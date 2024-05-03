import { JumboTabs } from 'antd-mobile'
import Steps from './Steps'

function JumboTab({ planDate }) {
  return (
    <>
      <JumboTabs>
        {planDate.map(({ id, date, content }) => (
          <JumboTabs.Tab title={`${id} Day`} description={date} key={id}>
            {}
          </JumboTabs.Tab>
        ))}
      </JumboTabs>
    </>
  )
}

export default JumboTab
