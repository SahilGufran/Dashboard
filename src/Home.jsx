import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan',
          uv: 500,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 500,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 700,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 500,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 500,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 500,
          amt: 2500,
        },
        {
            name: 'July',
            uv: 500,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 4000,
            amt: 2100,
        },
        {
            name: 'Sept',
            uv: 500,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 500,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 500,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 500,
            
            amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h1>Earning</h1>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h2>$198k</h2>
                <p>⬆️37.8%</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h1>Orders</h1>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h2>2.4k</h2>
                <p>⬇️2% this month</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h1>Balance</h1>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h2>2.4k</h2>
                <p>⬇️2% this month</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h1>Total Sales</h1>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h2>$89k</h2>
                <p>⬆️11% this month</p>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home
