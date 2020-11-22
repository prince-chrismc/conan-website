const tribeMembers = [
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
  {
    name           : 'Baruch Sadogursky',
    image          : 'src/img/tribe-baruch.png',
    description    : 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.',
    longDescription: 'Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. Commitment to keep giving feedback about important architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd. architecture and design issues for Conan 2.0.  Head of Tools and Software Infrastructure at Microblink Ltd.',
    twitter        : 'https://twitter.com/jbaruch',
    facebook       : 'https://www.facebook.com/jbaruch',
    github         : 'https://github.com/jbaruch',
    email          : 'dodoentertainment@gmail.com'
  },
]

jQuery((function(t) {
  if (t('body').hasClass('tribe')) {
     const membersRow    = document.getElementById('tribeMembersRow')
     const $membersModal = $('#conanTribeMemberModal')

     tribeMembers.forEach((oneMember, i) => {
       const oneMemberHTML = getTribeMemberHTML(i, oneMember.name, oneMember.image, oneMember.description, oneMember.twitter, oneMember.facebook, oneMember.github)
       membersRow.insertAdjacentHTML('beforeend',oneMemberHTML)
     });
     $(document).on('click', '.openTribeMemberModal', function() {
        const memberId = $(this).data('json-id')
        let memberInfo = tribeMembers[memberId]
        
        setMembersModalContent($membersModal, memberInfo)
        
        $membersModal.modal('show')
     })
  }
}))

const getTribeMemberHTML = (id, name, image, description, twitter = false, facebook = false, github = false) => {
  
  let twitterHTML = '', facebookHTML = '', githubHTML = ''
  
  if (twitter) twitterHTML = `<li>
  <a class="mr-2 tm_TwitterUrl" href="${twitter}"
    ><img class="lazy" src="img/social/twitter.svg" alt="twitter"
  /></a>
</li>`
  
  if (facebook) facebookHTML = `<li>
  <a class="mr-2 tm_FacebookUrl" href="${facebook}"
    ><img class="lazy" src="img/social/facebook.svg" alt="facebook"
  /></a>
</li>`
  
  if (github) githubHTML = `<li>
  <a class="mr-2 tm_GithubUrl" href="${github}"
    ><img class="lazy" src="img/social/github.svg" alt="github"
  /></a>
</li>`
  
  return `<div class="col-sm-6 col-md-4 col-lg-3 mb-4  one-tribe-member oneTribeMember" id="tribeMember_${id}" data-json-id=${id}>
    <div class="p-3 bg-bright-gray h-100 tm_Id">
              
      <div class="d-flex flex-column justify-content-between">
        <div class="content-top mb-5">
          <img class="w-100 h-auto bg-gray tm_Image" src="${image}" alt="${name}" width="278" height="252">
          <h3 class="mt-3 tm_Name">${name}</h3>
          <p class="tm_Description">${description}</p>
        </div>

        <div class="content-bottom">
          <ul class="socials d-flex mt-1 mb-0 pt-2 pl-0 list-unstyled">
            ${twitterHTML}
            ${facebookHTML}
            ${githubHTML}
          </ul>
            
          <button type="button" class="mt-3 big-btn bg-blue white openTribeMemberModal" data-json-id=${id}>
            View Profile
          </button>

        </div>
      </div>
              
    </div>
  </div>`
}

const setMembersModalContent = ($membersModal, memberInfo) => {
  $membersModal.find('.tmModal_Name').text(memberInfo.name)
  $membersModal.find('.tmModal_Image').attr('src', memberInfo.image).attr('alt', memberInfo.name)
  $membersModal.find('.tmModal_LongDescription').text(memberInfo.longDescription)
  //Twitter
  if (memberInfo.hasOwnProperty('twitter')) {
    $membersModal.find('.tmModal_TwitterUrl').attr('href', memberInfo.twitter).removeClass('d-none')
  } else {
    $membersModal.find('.tmModal_TwitterUrl').addClass('d-none')
  }
  //Facebook
  if (memberInfo.hasOwnProperty('facebook')) {
    $membersModal.find('.tmModal_FacebookUrl').attr('href', memberInfo.facebook).removeClass('d-none')
  } else {
    $membersModal.find('.tmModal_FacebookUrl').addClass('d-none')
  }
  //Github
  if (memberInfo.hasOwnProperty('github')) {
    $membersModal.find('.tmModal_GithubUrl').attr('href', memberInfo.github).removeClass('d-none')
  } else {
    $membersModal.find('.tmModal_GithubUrl').addClass('d-none')
  }
  //Email
  if (memberInfo.hasOwnProperty('email')) {
    $membersModal.find('.tmModal_Email').attr('href', 'mailto:'+memberInfo.email).text(memberInfo.email).removeClass('d-none')
  } else {
    $membersModal.find('.tmModal_Email').addClass('d-none')
  }
}