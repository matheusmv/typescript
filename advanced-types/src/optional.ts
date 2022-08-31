type AlbumAPIResponse = {
  title: string;
  artist?: {
    name: string;
    bio?: string;
    previousAlbums?: string[];
  };
};

const slaughterToPrevailKostolom: AlbumAPIResponse = {
  title: 'Kostolom',
  artist: {
    name: 'Slaughter to Prevail',
    previousAlbums: ['Misery Sermon'],
  },
};

const artistBio = slaughterToPrevailKostolom?.artist?.bio ?? 'bio not informed';

if (artistBio) {
  console.log(artistBio);
}

const artistBioElement =
  slaughterToPrevailKostolom?.['artist']?.['bio'] ?? 'bio not informed';

if (artistBioElement) {
  console.log(artistBioElement);
}

const firstPreviousAlbum =
  slaughterToPrevailKostolom?.artist?.previousAlbums?.[0];

if (firstPreviousAlbum) {
  console.log(firstPreviousAlbum);
}

const callApi = (data: unknown) => Promise.resolve(data);

const updateAlbum = async (
  data: unknown,
  callback?: (arg: unknown) => void,
): Promise<unknown> => {
  const response = await callApi(data);
  callback?.(response);
  return response;
};

updateAlbum(slaughterToPrevailKostolom, (response) => console.log(response));

updateAlbum(slaughterToPrevailKostolom).then((response) =>
  console.log(response),
);
