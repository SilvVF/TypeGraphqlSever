import {CycleTLSClient} from "cycletls";



const playerUrl = (name: string, tag: string) => `https://tracker.gg/valorant/profile/riot/${name}%23${tag}/overview`

export async function getPlayerData(name: string, tag: string, client: CycleTLSClient): Promise<string> {

        const resp = await client(playerUrl(name, tag), {
            body: '',
            ja3: '771,4865-4867-4866-49195-49199-52393-52392-49196-49200-49162-49161-49171-49172-51-57-47-53-10,0-23-65281-10-11-35-16-5-51-43-13-45-28-21,29-23-24-25-256-257,0',
            userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0',
        }, 'get');

        return getJsonFromPage(resp.body.toString())
}

function getJsonFromPage(body: string): string {
    const start = body.indexOf("\"segments\"")
    const end = body.indexOf("\"availableSegments\"")

    if (start == -1 || end == -1) {
        return "unable to get data for player check tagline and name"
    }

    return `{${body.substring(start, end - 1)}}`
}
