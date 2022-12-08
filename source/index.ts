import { findUp, findUpSync } from "find-up";
import { fileName, PackageJSON, isJSONObject } from "types-pkg-json";
import { readJSON, readJSONSync } from "read-json-safe";

export async function getModulePkg(relativeTo: string): Promise<PackageJSON | undefined> {
  const pkgPath = await findUp(fileName, { cwd: relativeTo });
  if(pkgPath !== undefined) {
    const json = await readJSON(pkgPath);
    return isJSONObject(json) ? json : undefined;
  } else {
    return undefined;
  }
}

export function getModulePkgSync(relativeTo: string): PackageJSON | undefined {
  const pkgPath = findUpSync(fileName, { cwd: relativeTo });
  if(pkgPath !== undefined) {
    const json = readJSONSync(pkgPath);
    return isJSONObject(json) ? json : undefined;
  } else {
    return undefined;
  }
}

export async function getVersion(relativeTo: string): Promise<string | undefined> {
  const pkg = await getModulePkg(relativeTo);
  return pkg?.version;
}

export function getVersionSync(relativeTo: string): string | undefined {
  const pkg = getModulePkgSync(relativeTo);
  return pkg?.version;
}

export type { PackageJSON } from "types-pkg-json";
