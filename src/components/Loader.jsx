import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: '#915eff',
          fontWeight: 800,
          marginTop: 40,
          textAlign: 'center',
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader