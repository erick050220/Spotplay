import { expect } from 'chai'
import { describe, it } from 'mocha'
import Song from '../../entity/Song.js'

describe('testing Song Class', () => {
  const song = new Song({
    title: 'title',
    uri: 'uri',
    duration: 'duration',
    image: 'image',
    idArtist: 'idArtist',
    idGenre: 'idGenre'
  })
  it('should is no null', () => {
    expect(song).to.not.equal(null)
  })
  it('shoud have a title', () => {
    expect(song._title).to.equal('title')
  })

  it('shoud return a number', () => {
    const result = song.returnNumber()
    expect(result).to.equal(5)
  })
})
