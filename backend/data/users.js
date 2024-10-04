const fs = require('node:fs/promises');

const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');

async function readData() {
  const data = await fs.readFile('users.json', 'utf8');
  return JSON.parse(data);
}
async function writeData(data) {
    await fs.writeFile('users.json', JSON.stringify(data));
  }

  async function get(email , password) {
    const storedData = await readData();
    if (!storedData.users || storedData.users.length === 0) {
      throw new NotFoundError('Could not find any users.');
    }
  
    const user = storedData.users.find((ev) => (ev.email === email && ev.password===password));
    if (!user ) {
      throw new NotFoundError('Could not find user for email ' + email);
    }
  
    return user;
  }
  async function add(data) {
    const storedData = await readData();
    storedData.users.unshift({ ...data, id: generateId() });
    await writeData(storedData);
  }
  exports.get=get;
  exports.add=add;