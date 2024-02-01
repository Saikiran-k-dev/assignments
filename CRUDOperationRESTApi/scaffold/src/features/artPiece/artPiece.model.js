// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // Write your code here to retrieve all art pieces
    const result = ArtPiece.db.filter((ap)=>{
      return (
        (!query.id || ap.id==query.id) &&
        (!query.title || ap.title==query.title) &&
        (!query.artist || ap.artist==query.artist) &&
        (!query.year || ap.year==query.year) 
        
      )
    })
    return result
  }

  static findOne(id) {
    // Write your code here to retrieve a specific art piece by its id
    const result = ArtPiece.db.find(p=>p.id==id)
    return result
  }

  static update(id, data) {
    // Write your code here to update the details of a specific art piece
    const index = this.db.findIndex(p=>p.id==id)
    this.db[index]=new ArtPiece(parseInt(id),data.title,data.artist,data.year,data.imageUrl)
    const updatedArtPiece = this.db.find(p=>p.id==id)
    return updatedArtPiece
  }

  static delete(id) {
    const index = ArtPiece.db.findIndex(p=>p.id==id)
    // console.log(index)
    ArtPiece.db.splice(index,1)
    // console.log(ArtPiece.db)
    return ArtPiece.db
  }
}
