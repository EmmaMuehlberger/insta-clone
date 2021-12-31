<template>
	<div class="DirectMessages">
		<div class="DirectMessages__persons">
			<div class="DirectMessages__persons__header">
				<p class="medium bold">emmamuehlberger</p>
				<svg aria-label="arrow down" color="#262626" fill="#262626" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg>
				<svg aria-label="new message" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
			</div>
			<div class="DirectMessages__persons__person DirectMessages__persons__person--active">
				<AccountWithNoStory img="profile-pic1.jpg" alt="user profile pic" />
				<div class="DirectMessages__persons__person__info">
					<h5 class="smallMedium">Tutku Öztoygan</h5>
					<p class="smallMedium grey">Active 2 minutes ago</p>
				</div>
			</div>
			<div class="DirectMessages__persons__person">
				<AccountWithNoStory img="profile-pic2.jpg" alt="user profile pic" />
				<div class="DirectMessages__persons__person__info">
					<h5 class="smallMedium">Ahu Azarina</h5>
					<p class="smallMedium grey">Active 1 day ago</p>
				</div>
			</div>
			<div class="DirectMessages__persons__person">
				<AccountWithNoStory img="profile-pic3.jpg" alt="user profile pic" />
				<div class="DirectMessages__chat__header__info">
					<h5 class="smallMedium">Marie Regenberg</h5>
					<p class="smallMedium grey">Active 4 hours ago</p>
				</div>
			</div>
		</div>
		<div class="DirectMessages__chat">
			<div class="DirectMessages__chat__header">
				<AccountWithNoStory img="profile-pic1.jpg" alt="user profile pic" />
				<div class="DirectMessages__chat__header__info">
					<h2 class="medium bold">Tutku Öztoygan</h2>
					<p class="verySmall grey">Active 2 minutes ago</p>
				</div>
				<svg aria-label="View deatils about the messaging history" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
			</div>
			<div class="DirectMessages__chat__messages">
				<div class="DirectMessages__chat__messages__message DirectMessages__chat__messages__message--other">
					<AccountWithNoStory img="profile-pic1.jpg" alt="user profile pic" />
					<p>HAhahaha yesssss</p>
				</div>
				<div class="DirectMessages__chat__messages__message DirectMessages__chat__messages__message--me">
					<AccountWithNoStory img="profile-pic.jpg" alt="user profile pic" />
					<p>😂😂😂😂😂</p>
				</div>
			</div>
			<div class="DirectMessages__chat__newMessage">
				<svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
				<div class="DirectMessages__chat__newMessage__input">
					<input type="text" placeholder="Write a message ...">
				</div>
				<svg aria-label="Foto oder Video hinzufügen" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z" fill-rule="evenodd"></path><path d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><path d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" src="./DirectMessages.scss"></style>