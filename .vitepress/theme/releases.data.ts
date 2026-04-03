interface ReleaseAsset {
  name: string;
  url: string;
  size: number;
}

interface ReleaseInfo {
  version: string;
  date: string;
  assets: ReleaseAsset[];
  url: string;
}

export interface ReleasesData {
  app: ReleaseInfo | null;
  plugin: ReleaseInfo | null;
}

declare const data: ReleasesData;

export { data };

async function fetchRelease(repo: string): Promise<ReleaseInfo | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/musicbeeremote/${repo}/releases/latest`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      },
    );

    if (!response.ok) {
      console.warn(`Failed to fetch ${repo} release: ${response.status}`);
      return null;
    }

    const release = await response.json();
    return {
      version: release.tag_name,
      date: new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      assets: release.assets.map((asset: any) => ({
        name: asset.name,
        url: asset.browser_download_url,
        size: asset.size,
      })),
      url: release.html_url,
    };
  }
  catch (error) {
    console.warn(`Failed to fetch ${repo} release:`, error);
    return null;
  }
}

export default {
  async load(): Promise<ReleasesData> {
    const [app, plugin] = await Promise.all([
      fetchRelease('mbrc'),
      fetchRelease('mbrc-plugin'),
    ]);
    return { app, plugin };
  },
};
