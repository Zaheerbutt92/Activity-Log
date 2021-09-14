FROM mcr.microsoft.com/dotnet/sdk:5.0

ENV DOTNET_USE_POLLING_FILE_WATCHER 1

WORKDIR /activity-log-server
COPY . .
ENTRYPOINT dotnet watch run --urls=https://+:5001 --project DocketTestApp.csproj
CMD [ "API.dll" ]