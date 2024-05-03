import { Steps } from 'antd-mobile'

function StepsComponent() {
  return (
    <Steps direction="vertical">
      <Steps.Step
        title="填写机构信息"
        status="finish"
        description="完成时间：2020-12-01 12:30"
      />
    </Steps>
  )
}

export default StepsComponent
