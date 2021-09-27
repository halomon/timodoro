import React from 'react';
import ReactDOM from 'react-dom';
import Wave from 'react-wavify';
import styled from '@emotion/styled';
import mode from './Timer';

import './Styles.css';

const WaveSContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  z-index: -1;
  transform: rotate(180deg);
`;


function WaversSettings() {
      return(
                  <div style={{ marginTop: "-200px" }}>
                    <WaveSContainer level={100}>
                      <Wave
                        fill="#00b6ad"
                        paused={false}
                        opacity="1.30"
                        options={{
                          height: 90,
                          amplitude: 10,
                          speed: 0.2,
                          points: 3,
                        }}
                      />
                    </WaveSContainer>
                    <WaveSContainer level={40}>
                      <Wave
                        fill="#00959e"
                        opacity="1.80"
                        paused={false}
                        options={{
                          height: 75,
                          amplitude: 20,
                          speed: 0.3,
                          points: 2,
                        }}
                      />
                    </WaveSContainer>
                    <WaveSContainer level={20}>
                      <Wave
                        fill="#01838a"
                        paused={false}
                        opacity="1.5"
                        options={{
                          height: 45,
                          amplitude: 30,
                          speed: 0.1,
                          points: 4,
                        }}
                      />
                    </WaveSContainer>
                  </div>
                );
              }
              
              const rootElement = document.getElementById('root');
              ReactDOM.render(<WaversSettings />, rootElement);
              

export default WaversSettings;