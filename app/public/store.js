document.addEventListener("alpine:init", () => {
  Alpine.store("globalStore", {
    // State
    bookmarks: Alpine.$persist([]).as("globalStore_bookmarks"),
    // Getters
    get bookmarksCounter() {
      return this.bookmarks.length;
    },
    // Mutations
    bookmarkHandler(bookmarkId) {
      const bookmarksCopy = [...this.bookmarks];
      const bookmarkIndex = bookmarksCopy.indexOf(bookmarkId);

      if (bookmarkIndex === -1) bookmarksCopy.push(bookmarkId);
      else bookmarksCopy.splice(bookmarkIndex, 1);

      this.bookmarks = bookmarksCopy;
    },
  });
});
