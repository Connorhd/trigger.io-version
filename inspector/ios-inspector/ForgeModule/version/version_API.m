//
//  version_API.m
//  ForgeModule
//
//  Created by Patrick Rudolph on 05.11.12.
//  Copyright (c) 2012 Hojoki GmbH. All rights reserved.
//

#import "version_API.h"

@implementation version_API

+ (void)getVersionString:(ForgeTask*)task {
	[task success:[[UIDevice currentDevice] systemVersion]];
}

@end
