import shell from "shelljs"
import rename from "./utils/rename-file"

const pkg = "css-reset"
shell.find(`packages/${pkg}/src`).forEach(rename)
