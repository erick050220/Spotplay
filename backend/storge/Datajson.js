import fs from 'fs'

export class DataJson {
  constructor () {
    this._dataPath = './storge/db.json'
    this.setTables()
  }

  setTables () {
    const tables = {
      user: [],
      song: [],
      artist: [],
      playlist: []
    }
    const items = this.readJsonFile()
    if (items.length === 0) {
      this.writeJsonFile(tables)
    }
  }

  readJsonFile () {
    const contentFile = fs.readFileSync(this._dataPath, 'utf-8')
    if (contentFile) {
      return JSON.parse(contentFile)
    }
    return []
  }

  writeJsonFile (data) {
    const jsonData = JSON.stringify(data, null, '')
    fs.writeFileSync(this._dataPath, jsonData)
  }

  generatePK (table) {
    const lastItem = this.all(table).pop()
    if (lastItem) {
      return ++lastItem._id
    }
    return 1
  }

  save (table, data) {
    const items = this.readJsonFile()
    data._id = this.generatePK(table)
    items[table].push(data)
    this.writeJsonFile(items)
    return 'create new item'
  }

  all (table) {
    const items = this.readJsonFile()
    return items[table] || []
  }

  findByAtribute (table, atribute, value) {
    const items = this.readJsonFile()
    const item = items[table].find(item => item[atribute] === value)
    if (item) {
      return item
    }
    return null
  }
}
// const test = new DataJson()
// const result = test.find('song', '_title', 'song')
// console.table(result)
// const data = new DataJson()
// data.save('song', { id: null, name: 'song ', singer: 'singer2' })
// data.save('user', { id: null, name: 'song ', singer: 'singer2' })
// const response1 = data.all('song')
// const response = data.all('user')
// console.table(response1)
// console.table(response)
