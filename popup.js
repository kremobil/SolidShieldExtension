const activeCheckbox = document.querySelector("#filtering")

activeCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({ "filtering": activeCheckbox.checked });
})

console.log(chrome.storage.sync.get(["filtering"], (items) => {
    console.log(items.filtering)
}))