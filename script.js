body {
  font-family: Arial;
  text-align: center;
  background: #f4f4f4;
  margin: 0;
}

h1 {
  background: #333;
  color: white;
  padding: 15px;
  margin: 0;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.calendar {
  background: white;
  padding: 15px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  width: 14%;
  padding: 5px;
  text-align: center;
}

.today {
  background: yellow;
  border-radius: 50%;
}

.highlight {
  background: lightgreen;
  border-radius: 50%;
}
