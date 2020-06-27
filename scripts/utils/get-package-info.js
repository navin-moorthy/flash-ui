/**
 * Gets the information about a package including
 * `yarn workspace` command, directory
 *
 * @param {String} pkg  the package directory to run command
 */
export default function getPackageInfo(pkg) {
  // prepare the workspace command
  const cmd = `yarn workspace @flash-ui/${pkg}`

  // prepare the directory path to run
  const dir = `packages/${pkg}`

  // name of the package
  const name = `@flash-ui/${pkg}`

  return { dir, cmd, name }
}
