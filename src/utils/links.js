export function isLinkReady(url) {
  return typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
}

export function truncateAddress(address, start = 6, end = 4) {
  if (!address || address.length <= start + end + 3) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}

export function getDexscreenerEmbedSrc(url) {
  if (!isLinkReady(url)) return null;
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("dexscreener.com")) return null;
    parsed.searchParams.set("embed", "1");
    parsed.searchParams.set("theme", "dark");
    parsed.searchParams.set("info", "0");
    return parsed.toString();
  } catch {
    return null;
  }
}
