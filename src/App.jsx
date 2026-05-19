import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Premium", value: 40 },
  { name: "Regular", value: 30 },
  { name: "New", value: 20 },
  { name: "Low Spending", value: 10 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626"];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Customer Segmentation Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Total Customers</h2>
          <p className="text-3xl font-bold">1,250</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Premium Customers</h2>
          <p className="text-3xl font-bold text-blue-600">320</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Returning Customers</h2>
          <p className="text-3xl font-bold text-green-600">540</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Average Spending</h2>
          <p className="text-3xl font-bold text-orange-500">450</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Customer Segments
        </h2>

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={140}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Customer Details
        </h2>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Spending</th>
              <th className="p-3">Segment</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">John</td>
              <td className="p-3">28</td>
              <td className="p-3">1200</td>
              <td className="p-3 text-blue-600">Premium</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">Sarah</td>
              <td className="p-3">34</td>
              <td className="p-3">600</td>
              <td className="p-3 text-green-600">Regular</td>
            </tr>

            <tr>
              <td className="p-3">David</td>
              <td className="p-3">22</td>
              <td className="p-3">150</td>
              <td className="p-3 text-red-600">Low Spending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Business Insights
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Premium customers contribute the highest revenue.
          </li>

          <li>
            Most high-spending customers are between ages 25–35.
          </li>

          <li>
            Returning customers show strong engagement.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;