function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '-'
        }
    }
}