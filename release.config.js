module.exports = {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/git", {
      "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}\n\n[skip ci]"
    }],
    ["semantic-release-vsce", {
      "packageVsix": "lux-vscode.vsix"
    }],
    "@semantic-release/github"
  ]
};
