import React from 'react';
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLineCanvas } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const data = [
  {
    "id": "japan",
    "color": "hsl(59, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 259
      },
      {
        "x": "helicopter",
        "y": 238
      },
      {
        "x": "boat",
        "y": 249
      },
      {
        "x": "train",
        "y": 70
      },
      {
        "x": "subway",
        "y": 130
      },
      {
        "x": "bus",
        "y": 225
      },
      {
        "x": "car",
        "y": 96
      },
      {
        "x": "moto",
        "y": 202
      },
      {
        "x": "bicycle",
        "y": 299
      },
      {
        "x": "horse",
        "y": 167
      },
      {
        "x": "skateboard",
        "y": 269
      },
      {
        "x": "others",
        "y": 72
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(106, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 185
      },
      {
        "x": "helicopter",
        "y": 45
      },
      {
        "x": "boat",
        "y": 148
      },
      {
        "x": "train",
        "y": 169
      },
      {
        "x": "subway",
        "y": 199
      },
      {
        "x": "bus",
        "y": 199
      },
      {
        "x": "car",
        "y": 115
      },
      {
        "x": "moto",
        "y": 230
      },
      {
        "x": "bicycle",
        "y": 300
      },
      {
        "x": "horse",
        "y": 252
      },
      {
        "x": "skateboard",
        "y": 8
      },
      {
        "x": "others",
        "y": 77
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(345, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 75
      },
      {
        "x": "helicopter",
        "y": 183
      },
      {
        "x": "boat",
        "y": 10
      },
      {
        "x": "train",
        "y": 139
      },
      {
        "x": "subway",
        "y": 233
      },
      {
        "x": "bus",
        "y": 5
      },
      {
        "x": "car",
        "y": 33
      },
      {
        "x": "moto",
        "y": 135
      },
      {
        "x": "bicycle",
        "y": 120
      },
      {
        "x": "horse",
        "y": 221
      },
      {
        "x": "skateboard",
        "y": 224
      },
      {
        "x": "others",
        "y": 85
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(352, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 186
      },
      {
        "x": "helicopter",
        "y": 66
      },
      {
        "x": "boat",
        "y": 257
      },
      {
        "x": "train",
        "y": 13
      },
      {
        "x": "subway",
        "y": 118
      },
      {
        "x": "bus",
        "y": 198
      },
      {
        "x": "car",
        "y": 225
      },
      {
        "x": "moto",
        "y": 113
      },
      {
        "x": "bicycle",
        "y": 21
      },
      {
        "x": "horse",
        "y": 131
      },
      {
        "x": "skateboard",
        "y": 91
      },
      {
        "x": "others",
        "y": 74
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(52, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 52
      },
      {
        "x": "helicopter",
        "y": 197
      },
      {
        "x": "boat",
        "y": 162
      },
      {
        "x": "train",
        "y": 199
      },
      {
        "x": "subway",
        "y": 125
      },
      {
        "x": "bus",
        "y": 116
      },
      {
        "x": "car",
        "y": 177
      },
      {
        "x": "moto",
        "y": 239
      },
      {
        "x": "bicycle",
        "y": 204
      },
      {
        "x": "horse",
        "y": 250
      },
      {
        "x": "skateboard",
        "y": 102
      },
      {
        "x": "others",
        "y": 7
      }
    ]
  }
]

export function MyResponsiveLine(props){
    return (
<div style={{height:500}}>
    <ResponsiveLineCanvas
        data={props.data}
        height={500}
        margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 800, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            //legend: 'transportation',
            //legendOffset: 36,
            //legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{scheme: 'nivo'}}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
</div>
)
}
