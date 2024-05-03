import { FloatingBubble, Empty } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'

function FloatingBubbleComponent() {
  return (
    <div>
      <FloatingBubble
        axis="x"
        magnetic="x"
        style={{
          '--initial-position-bottom': '24px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
        }}
      >
        <AddOutline fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

export default FloatingBubbleComponent
