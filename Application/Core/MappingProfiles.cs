using System.Linq;
using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
                .ForMember(d => d.HostUsername, o => o.MapFrom(src => src.Attendees
                    .FirstOrDefault(x=>x.IsHost).AppUser.UserName));
            CreateMap<ActivityAttendee, Profiles.Profile>()
                .ForMember(d => d.DisplayName, o => o.MapFrom(src => src.AppUser.DisplayName))
                .ForMember(d => d.Username, o => o.MapFrom(src => src.AppUser.UserName))
                .ForMember(d => d.Bio, o => o.MapFrom(src => src.AppUser.Bio));

        }
    }
}