import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: boolean =  false
  favorites: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavoriteFriend(person: string) {
    if (!this.favorites.includes(person)) {
      this.favorites.push(person);
    }
  }

  getFavorites() {
    return this.favorites.join(", ")
  }

  removeFavoriteFriend(person: string){
    if (this.favorites.includes(person)) {
      this.favorites = this.favorites.filter((favorite) => favorite != person) 
    }
  }
}
