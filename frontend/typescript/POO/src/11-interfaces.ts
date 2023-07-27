export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect() {
    console.log('Connecting to Postgres...');
  }
  disconnect() {
    console.log('Disconnecting from Postgres...');
  }
  isConnected(name: string) {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect() {
    console.log('Connecting to Oracle...');
  }
  disconnect() {
    console.log('Disconnecting from Oracle...');
  }
  isConnected(name: string) {
    return true;
  }
}