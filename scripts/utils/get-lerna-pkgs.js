import shell from "shelljs"

export default function getLernaPackages() {
  const pkgs = shell.exec("lerna ls --toposort --json --loglevel silent")
  return JSON.parse(pkgs).map(({ name }) => ({
    name: name,
    folder: name.split("/")[1],
  }))
}
